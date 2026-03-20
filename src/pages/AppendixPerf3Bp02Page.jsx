import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP02 — 데이터 스토어의 사용 가능한 구성 옵션 평가</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 보통</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 보통입니다.</p>
      </div>
      <p>데이터 스토어의 다양한 구성 옵션(인스턴스 크기, 스토리지 유형, 파라미터 그룹 등)을 평가하고 워크로드 성능 요구사항에 맞게 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>성능 요구사항을 충족하는 최적화된 데이터 스토어 구성으로 안정적인 응답 시간과 리소스 효율성을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기본 구성 옵션을 검토 없이 그대로 사용</li>
        <li>워크로드 분석 없이 데이터 스토어 인스턴스 크기 선택</li>
        <li>인덱스 전략 없이 데이터 스토어 운영</li>
        <li>데이터 스토어 파라미터를 워크로드 특성에 맞게 조정하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적화된 구성으로 쿼리 성능 향상</li>
        <li>적절한 인스턴스 크기 선택으로 리소스 효율성 개선</li>
        <li>안정적이고 예측 가능한 응답 시간 확보</li>
        <li>데이터 스토어 비용 최적화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon RDS Performance Insights로 쿼리 성능 병목 분석</li>
        <li>워크로드 유형에 맞는 파라미터 그룹 최적화</li>
        <li>인덱스 설계 검토 및 불필요한 인덱스 제거</li>
        <li>읽기/쓰기 워크로드 분리를 위한 인스턴스 크기 및 복제본 구성</li>
        <li>DynamoDB 용량 모드(온디맨드/프로비저닝) 최적 선택</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS Performance Insights — 데이터베이스 성능 분석</li>
        <li>Amazon DynamoDB — 용량 최적화 및 구성</li>
        <li>AWS Database Migration Service — 데이터베이스 마이그레이션</li>
        <li>AWS Compute Optimizer — 데이터베이스 인스턴스 최적화 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
