import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP05 — 데이터 액세스 및 스토리지 패턴을 가장 잘 지원하는 소프트웨어 패턴 및 아키텍처 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        워크로드 내 데이터가 사용·소비·전송·저장되는 방식을 이해합니다.
        워크로드를 지원하는 데 필요한 컴퓨팅, 네트워킹, 스토리지 리소스를 최소화하기 위해
        데이터 액세스 및 스토리지를 가장 잘 지원하는 소프트웨어 패턴과 아키텍처를 사용합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        개발 복잡성 감소 및 전반적인 활용률 증가, 적절한 스토리지 계층 선택을 통한 리소스 효율성 최적화,
        실제 워크로드 요구에 맞는 확장성, 효율적인 데이터 처리를 통한 리소스 사용 감소를 달성합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 워크로드가 유사한 데이터 스토리지 및 액세스 패턴을 가진다고 가정하는 경우</li>
        <li>모든 워크로드에 단일 스토리지 계층만 사용하는 경우</li>
        <li>데이터 액세스 패턴이 시간이 지나도 일관하게 유지된다고 가정하는 경우</li>
        <li>잠재적인 높은 데이터 액세스 급증을 지원하도록 아키텍처를 구성하여 대부분의 시간에 유휴 리소스가 발생하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>개발 복잡성 감소 및 전반적인 활용률 향상</li>
        <li>글로벌 테이블, 데이터 파티셔닝, 캐싱 전략을 통한 운영 오버헤드 감소</li>
        <li>효율적인 데이터 처리를 통한 리소스 사용 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>데이터 유형(정형·반정형·비정형), 성장(경계·무경계), 내구성(영구·임시·일시), 액세스 패턴(읽기/쓰기 빈도, 급격·일관적)을 분석합니다.</li>
        <li>AWS의 현대적 데이터 아키텍처 및 목적에 맞는 서비스를 사용합니다.</li>
        <li>Amazon Athena, AWS Glue, Amazon Redshift의 압축 데이터 기술을 활용합니다.</li>
        <li>지배적인 쿼리 패턴을 가장 잘 지원하는 데이터베이스 엔진을 선택하고 효율적인 쿼리를 위해 인덱스를 관리합니다.</li>
        <li>네트워크 용량 소비를 줄이는 네트워크 프로토콜을 선택합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS / Aurora — 관계형 데이터베이스</li>
        <li>Amazon DynamoDB — 키-값 및 문서 데이터베이스</li>
        <li>Amazon Athena — 서버리스 대화형 쿼리</li>
        <li>AWS Glue — ETL 및 데이터 카탈로그</li>
        <li>Amazon Redshift — 데이터 웨어하우스</li>
        <li>Amazon S3 Intelligent-Tiering — 자동 스토리지 계층 최적화</li>
        <li>Amazon EventBridge — 이벤트 기반 아키텍처</li>
      </ul>

      <PageNav />
    </article>
  );
}
