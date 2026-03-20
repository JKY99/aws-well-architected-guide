import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP01 — 데이터 액세스 및 스토리지 요구사항을 가장 잘 지원하는 목적별 데이터 스토어 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>데이터 액세스 패턴과 스토리지 요구사항에 최적화된 목적별 데이터 스토어를 선택합니다. 관계형, NoSQL, 인메모리, 시계열, 그래프 등 다양한 데이터 스토어의 특성을 이해하고 적합한 스토어를 활용합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드의 데이터 모델과 액세스 패턴에 최적화된 데이터 스토어를 선택하여 쿼리 성능과 확장성을 극대화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 용도에 관계형 데이터베이스를 일괄 적용</li>
        <li>데이터 모델 분석 없이 데이터 스토어 선택</li>
        <li>쿼리 패턴을 고려하지 않은 데이터 스토어 유형 결정</li>
        <li>목적별 데이터 스토어의 특성과 제한을 파악하지 않고 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 모델에 최적화된 쿼리 성능 달성</li>
        <li>목적에 맞는 데이터 스토어 선택으로 비용 효율성 향상</li>
        <li>워크로드 성장에 따른 자연스러운 확장성 확보</li>
        <li>개발 복잡성 감소 및 유지보수 용이성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>데이터 모델(관계형, 문서, 키-값, 그래프, 시계열) 분석</li>
        <li>쿼리 패턴과 트랜잭션 요구사항 파악</li>
        <li>목적별 DB 선택: RDS/Aurora(관계형), DynamoDB(NoSQL), ElastiCache(인메모리), Neptune(그래프), Timestream(시계열)</li>
        <li>확장성 및 일관성 요구사항을 기반으로 최종 결정</li>
        <li>필요한 경우 여러 데이터 스토어를 조합하여 폴리글랏 아키텍처 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS / Amazon Aurora — 관계형 데이터베이스</li>
        <li>Amazon DynamoDB — NoSQL 키-값 및 문서 데이터베이스</li>
        <li>Amazon ElastiCache — 인메모리 캐시</li>
        <li>Amazon Neptune — 그래프 데이터베이스</li>
        <li>Amazon Timestream — 시계열 데이터베이스</li>
      </ul>
      <PageNav />
    </article>
  );
}
