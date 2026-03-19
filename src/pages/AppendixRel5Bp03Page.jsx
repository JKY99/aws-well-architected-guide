import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP03 — 모든 경로에서 데이터 무결성 유지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 데이터 손상이나 불일치가 감지되지 않은 채 시스템에 전파되어 복구 불가능한 데이터 손실로 이어질 수 있습니다.</p>
      </div>
      <p>데이터 무결성은 데이터가 생성·전송·저장·처리되는 모든 단계에서 정확성과 일관성을 보장합니다. 트랜잭션 무결성, 멱등성 설계, 체크섬 검증을 통해 데이터 손상을 조기에 감지하고 방지합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터가 시스템의 모든 경로를 통과하는 동안 정확성과 일관성이 유지됩니다. 데이터 손상 또는 불일치가 발생할 경우 즉시 감지되어 전파를 차단하고, 분산 트랜잭션이 성공 또는 완전한 롤백으로만 완료됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>분산 시스템에서 부분 성공 상태를 처리하지 않아 데이터 불일치 발생</li>
        <li>네트워크 재시도 시 중복 처리를 방지하는 멱등성 키 미구현</li>
        <li>데이터 전송 시 체크섬이나 해시 검증 없이 무결성을 가정</li>
        <li>트랜잭션 경계 없이 여러 데이터 스토어에 순차적으로 쓰기</li>
        <li>이벤트 소싱 없이 이벤트 처리 결과만 저장하여 감사 추적 불가</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 손상을 조기에 감지하여 시스템 전반으로의 전파 차단</li>
        <li>멱등성 설계로 네트워크 재시도나 중복 이벤트로 인한 데이터 오염 방지</li>
        <li>트랜잭션 무결성을 통해 분산 시스템에서도 일관된 데이터 상태 유지</li>
        <li>규정 준수 및 감사 요구사항 충족을 위한 데이터 이력 추적</li>
        <li>데이터 복구 시 신뢰할 수 있는 복원 지점 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>API 요청에 멱등성 키(idempotency key)를 도입하여 중복 처리 방지</li>
        <li>ACID 트랜잭션을 지원하는 데이터베이스를 활용하거나 Saga 패턴으로 분산 트랜잭션 관리</li>
        <li>S3 객체 업로드 시 MD5 또는 SHA256 체크섬을 함께 전송하여 전송 무결성 검증</li>
        <li>데이터베이스 제약(NOT NULL, UNIQUE, FOREIGN KEY)을 엄격히 적용하여 애플리케이션 수준 오류 보완</li>
        <li>Amazon DynamoDB Transactions를 활용하여 여러 항목에 대한 원자적 쓰기 구현</li>
        <li>이벤트 소싱 패턴으로 모든 상태 변경을 이벤트 스트림에 기록하여 재현 가능한 상태 관리</li>
        <li>데이터 검증 게이트를 파이프라인에 삽입하여 스키마 및 비즈니스 규칙 위반 조기 감지</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon DynamoDB Transactions — 원자적 다중 항목 쓰기</li>
        <li>Amazon Aurora — ACID 트랜잭션 및 글로벌 데이터베이스</li>
        <li>Amazon S3 — 체크섬 검증 및 객체 잠금(Object Lock)</li>
        <li>AWS Glue Data Quality — 데이터 파이프라인 품질 검증</li>
        <li>Amazon Kinesis — 이벤트 스트림 기반 감사 추적</li>
        <li>AWS CloudTrail — API 호출 감사 로그</li>
      </ul>
      <PageNav />
    </article>
  );
}
