import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP01 — 데이터베이스 특성 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>관계형, NoSQL, 인메모리, 시계열, 그래프 등 다양한 데이터베이스 유형의 특성을 파악하고 워크로드에 적합한 유형을 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 모델과 액세스 패턴에 최적화된 데이터베이스를 선택하여 쿼리 성능과 확장성을 극대화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 용도에 관계형 데이터베이스를 일괄 적용</li>
        <li>데이터 모델 분석 없이 데이터베이스 선택</li>
        <li>쿼리 패턴을 고려하지 않은 데이터베이스 유형 결정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 모델에 최적화된 쿼리 성능 달성</li>
        <li>목적에 맞는 DB 선택으로 비용 효율성 향상</li>
        <li>워크로드 성장에 따른 자연스러운 확장성 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>데이터 모델(관계형, 문서, 키-값, 그래프, 시계열) 분석</li>
        <li>쿼리 패턴과 트랜잭션 요구사항 파악</li>
        <li>목적별 DB 선택: RDS(관계형), DynamoDB(NoSQL), ElastiCache(인메모리), Neptune(그래프), Timestream(시계열)</li>
        <li>확장성 및 일관성 요구사항 기반으로 최종 결정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS</li>
        <li>Amazon DynamoDB</li>
        <li>Amazon ElastiCache</li>
        <li>Amazon Neptune</li>
        <li>Amazon Timestream</li>
      </ul>
      <PageNav />
    </article>
  );
}
